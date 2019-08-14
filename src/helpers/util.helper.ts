import {HttpHeaders} from "@angular/common/http";

export class UtilHelper {


    montarHeaders(array: Array<Object> = []): HttpHeaders {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        if (array.length > 0) {
            array.forEach((obj) => {
                Object.keys(obj).forEach(index => {
                    headers.append(index, obj[index]);
                });
            });
        }
        return headers;
    }

    calcularIdade(data: string): number {
        if (data != '') {
            let dataNascimento = new Date(data.toString().replace(/-/g, '\/'));
            let dataAtual = new Date();

            let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
            if ((dataAtual.getMonth() + 1) < (dataNascimento.getMonth() + 1)) {
                idade--;
            }
            if ((dataAtual.getMonth() + 1) == (dataNascimento.getMonth() + 1)) {
                if (dataAtual.getDate() < dataNascimento.getDate()) {
                    idade--;
                }
            }
            return idade;
        }


        return null;
    }
}