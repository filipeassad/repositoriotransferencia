export class InputHelper {

    inputSomenteNumeros(e) {
        let charCode = e.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
            return false;
        } else {
            if (e.shiftKey) {
                return false;
            }
            return true;
        }
    }

}