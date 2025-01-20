import Swal from 'sweetalert2';
import { SweetAlertIcon } from 'sweetalert2';

const toast = (icon: SweetAlertIcon, title: string, text: string, onCloseCallback?: () => void, timer?: number) => {
    Swal.mixin({
        toast: true,
        position: 'top-end',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        showCancelButton: false,
        timer: timer,
        timerProgressBar: true,
        didClose: () => {
            if (onCloseCallback) {
                onCloseCallback();
            }
        }
    }).fire({
        icon: icon,
        title: title,
        text: text
    })
}

const showSuccessToast = (title: string, onCloseCallback?: () => void, timer?: number) => {
    toast('success', title, '', onCloseCallback, timer ? timer : 3000);
}

const showErrorToast = (title: string, text?: string, onCloseCallback?: () => void, timer?: number) => {
    toast('error', title, text ? text : '', onCloseCallback, timer ? timer : 3000);
}

const showWarningToast = (title: string, text?: string, onCloseCallback?: () => void, timer?: number) => {
    toast('warning', title, text ? text : '', onCloseCallback, timer ? timer : 3000);
}

const confirmation = (icon: SweetAlertIcon, title: string, text: string, confirmButtonText: string, cancelButtonText: string, onConfirmCallback: () => void) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    }).then((result) => {
        if (result.isConfirmed) onConfirmCallback();
    });
}

const showConfirmationQuestion = (title: string, text: string, confirmButtonText: string, cancelButtonText: string, onConfirmCallback: () => void) => {
    confirmation('question', title, text, confirmButtonText, cancelButtonText, onConfirmCallback);
}

const showConfirmationWarning = (title: string, text: string, confirmButtonText: string, cancelButtonText: string, onConfirmCallback: () => void) => {
    confirmation('warning', title, text, confirmButtonText, cancelButtonText, onConfirmCallback);
}

export {
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showConfirmationQuestion,
    showConfirmationWarning
}