import {Injectable} from "@angular/core";
import {Loading, LoadingController, Platform} from "ionic-angular";

@Injectable()
export class IosHelper {

    private loader: Loading;

    constructor(private platform: Platform,
                private loadingCtrl: LoadingController) {

    }

    /**
     * Metodo utilizado para mostrar um loader por um tempo determinado, padrao 0.5s
     *
     * @author Anderson Friaca
     * @since 27/06/2017
     * @param tempo
     */
    mostrarLoaderTemporario(tempo: number = 500) {
        if(this.platform.is('ios')) {
            this.loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            this.loader.present();
            setTimeout(() => {
                this.loader.dismiss()
            }, tempo);
        }
    }

}