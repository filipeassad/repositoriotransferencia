export class StatusAgendamentoKeys {


    static getStatusAgendamento(value: string) {
        let status = {
            'A': 'Autorizado',
            'N': 'Negado',
            'C': 'Concluído',
            'L': 'oncluído',
            'F': 'Falta'
        };

        if (typeof status[value]) {
            return status[value];
        }
        return null;
    }
}