import { Dialog } from "quasar";

export function showErrorMessage(errorMessage) {
    console.log(errorMessage)
    Dialog.create({
        title: 'Error: ',
        message: errorMessage
    })

}