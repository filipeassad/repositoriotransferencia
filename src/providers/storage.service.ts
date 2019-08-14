import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {StorageKeys} from "../storages/storage-keys";
import {Usuario} from "../models/usuario.model";
import {BeneficiarioBennerService} from "./beneficiario/benner/beneficiario-benner.service";
import {EnViPortalBeneficiario} from "../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {TipoPrestador} from "../models/tipo-prestador.model";
import {Especialidade} from "../models/especialidade.model";
import {Municipio} from "../models/municipio.model";

@Injectable()
export class StorageService {

    constructor(
        private storage: Storage,
        private beneficiarioBennerService: BeneficiarioBennerService
    ) {
    }


    refreshBeneficiarioEGrupoFamiliar(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getBeneficiario()
                .then(beneficiario => {
                    this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(beneficiario.handleTitular)
                        .subscribe(listaGrupoFamiliar => {
                            let beneficiarioAtual = listaGrupoFamiliar.find(benef => benef.handle === beneficiario.handle);
                            Promise.all([
                                this.setBeneficiario(beneficiarioAtual),
                                this.setGrupoFamiliar(listaGrupoFamiliar)
                            ])
                                .then(() => {
                                    resolve();
                                }, error => {
                                    reject(error);
                                });
                        }, () => {
                            reject('Ocorreu um erro ao carregar os dados, por favor tente novamente mais tarde');
                        });
                }, error => {
                    reject(error);
                });
        });
    }

    getBeneficiario(): Promise<EnViPortalBeneficiario> {
        return this.getFromStorage<EnViPortalBeneficiario>(StorageKeys.getKeyBeneficiario());
    }

    getBeneficiarioFromGrupoFamiliar(handle: number): Promise<EnViPortalBeneficiario> {
        return new Promise((resolve, reject) => {
            this.getGrupoFamiliar()
                .then(listaGrupoFamiliar => {
                    resolve(listaGrupoFamiliar.find(benef => benef.handle === handle));
                }, error => {
                    reject(error);
                });
        });
    }

    getBeneficiarioTitular(): Promise<EnViPortalBeneficiario> {
        return new Promise((resolve, reject) => {
            this.getGrupoFamiliar()
                .then(listaGrupoFamiliar => {
                    resolve(listaGrupoFamiliar.find(benef => benef.titular.toString() === 'S'));
                }, error => {
                    reject(error);
                });
        });
    }

    getGrupoFamiliar(): Promise<EnViPortalBeneficiario[]> {
        return this.getFromStorage<EnViPortalBeneficiario[]>(StorageKeys.getKeyGrupoFamiliar());
    }

    getUsuario(): Promise<Usuario> {
        return this.getFromStorage<Usuario>(StorageKeys.getKeyUsuario());
    }

    getTipoPrestadores(): Promise<TipoPrestador[]> {
        return this.getFromStorage<TipoPrestador[]>(StorageKeys.getKeyListaTipoPrestadores());
    }

    getEspecialidades(): Promise<Especialidade[]> {
        return this.getFromStorage<Especialidade[]>(StorageKeys.getKeyListaEspecialidades());
    }

    getMunicipios(): Promise<Municipio[]> {
        return this.getFromStorage<Municipio[]>(StorageKeys.getKeyListaMunicipios());
    }

    setBeneficiario(beneficiario: EnViPortalBeneficiario): Promise<EnViPortalBeneficiario> {
        return this.setInStorage<EnViPortalBeneficiario>(StorageKeys.getKeyBeneficiario(), beneficiario);
    }

    setGrupoFamiliar(listaGrupoFamiliar: EnViPortalBeneficiario[]): Promise<EnViPortalBeneficiario[]> {
        return this.setInStorage<EnViPortalBeneficiario[]>(StorageKeys.getKeyGrupoFamiliar(), listaGrupoFamiliar);
    }

    setUsuario(usuario: Usuario): Promise<Usuario> {
        return this.setInStorage<Usuario>(StorageKeys.getKeyUsuario(), usuario);
    }

    setTipoPrestadores(listaTipoPrestador: TipoPrestador[]): Promise<TipoPrestador[]> {
        return this.setInStorage<TipoPrestador[]>(StorageKeys.getKeyListaTipoPrestadores(), listaTipoPrestador);
    }

    setEspecialidades(listaEspecialidades: Especialidade[]): Promise<Especialidade[]> {
        return this.setInStorage<Especialidade[]>(StorageKeys.getKeyListaEspecialidades(), listaEspecialidades);
    }

    setMunicipios(listaMunicipios: Municipio[]): Promise<Municipio[]> {
        return this.setInStorage<Municipio[]>(StorageKeys.getKeyListaMunicipios(), listaMunicipios);
    }

    removeBeneficiario(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyBeneficiario());
    }

    removeGrupoFamiliar(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyGrupoFamiliar());
    }

    removeUsuario(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyUsuario());
    }

    removeTipoPrestadores(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyListaTipoPrestadores());
    }

    removeEspecialidades(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyListaEspecialidades());
    }

    removeMunicipios(): Promise<any> {
        return this.removeFromStorage(StorageKeys.getKeyListaMunicipios());
    }

    private getFromStorage<T>(key: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.storage.ready()
                .then(() => {
                    this.storage.get(key)
                        .then((stringValue: string) => {
                            resolve(JSON.parse(stringValue) as T);
                        }, () => {
                            reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                        });
                }, () => {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
        });
    }

    private setInStorage<T>(key: string, value?: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.storage.ready()
                .then(() => {
                    this.storage.set(key, JSON.stringify(value))
                        .then(() => {
                            resolve(value);
                        }, () => {
                            reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                        });
                }, () => {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
        });
    }

    /**
     * Metodo utilizado para remover um determinado dado do storage
     *
     * @author Anderson Friaca
     * @param key
     */
    private removeFromStorage(key: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.storage.ready()
                .then(() => {
                    this.storage.remove(key)
                        .then(() => {
                            resolve();
                        }, () => {
                            reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                        });
                }, () => {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
        });
    }
}