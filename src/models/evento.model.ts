export class Evento {

    private codEvento: string;
    private descricaoEvento: string;


    /**
     * Getter $codEvento
     * @return {string}
     */
	public get $codEvento(): string {
		return this.codEvento;
	}

    /**
     * Getter $descricaoEvento
     * @return {string}
     */
	public get $descricaoEvento(): string {
		return this.descricaoEvento;
	}

    /**
     * Setter $codEvento
     * @param {string} value
     */
	public set $codEvento(value: string) {
		this.codEvento = value;
	}

    /**
     * Setter $descricaoEvento
     * @param {string} value
     */
	public set $descricaoEvento(value: string) {
		this.descricaoEvento = value;
	}

}