import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      continue_btn: 'Siguiente',
      cancel_btn: 'Cancelar',
      access_btn: 'Acceder',
      go_back_btn: 'Volver a Password Manager',
      title: 'Crea tu Password Manager',
      instructions_password_saver:
        'Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.',
      instructions_password_save_box:
        'Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.',
      funcionality_title: 'Cómo funciona',
      funcionality_description:
        'En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.',
      data_save_title: 'Qué datos puedes guardar',
      data_save_description:
        'Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro.',
      terms_title: 'Para continuar debe aceptar los terminos y condiciones:',
      terms_description:
        'Confirmo que tengo mayoría de edad y acepto la Política de protección de datos.',
      form_error_length: 'Debe tener entre 6 y 24 caracteres',
      form_error_capital_letter: 'Debe contener al menos una mayúscula',
      form_error_number: 'Debe contener al menos un número',
      form_error_match: 'No coincide con la contraseña',
      create_password: 'Crea tu contraseña Maestra',
      repeat_password: 'Repite tu contraseña Maestra',
      hint_description:
        'También puedes crear una pista que te ayude a recordar tu contraseña maestra.',
      create_hint: 'Crea tu pista para recordar tu contraseña (opcional)',
      feedback_success_title: '¡Tu Password Manager ya está creado!',
      feedback_error_title: 'Ha habido un error',
      feedback_success_description:
        'Se ha podido crear tu contraseña maestra con exito.',
      feedback_error_description:
        'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.',
    },
  },
  en: {
    translation: {
      continue_btn: 'Continue',
      cancel_btn: 'Cancel',
      access_btn: 'Access',
      go_back_btn: 'Back to Password Manager',
      title: 'Create your Password Manager',

      instructions_password_saver:
        'Save here all your passwords, data or any information, forget paper notes and unprotected applications.',
      instructions_password_save_box:
        'Create your master key: only you can access your secrets with it.',
      funcionality_title: 'How does it work',
      funcionality_description:
        'First, you must create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.',
      data_save_title: 'What data can you save',
      data_save_description:
        'For example, the number of your card, the PIN and PUK of your mobile phone, the serial number of one of your devices or any information that you need to have in a safe place.',
      terms_title: 'To continue you must accept the terms and conditions:',
      terms_description:
        'Confirm that I am of legal age and accept the Data Protection Policy.',

      form_error_length: 'Must be between 6 and 24 characters',
      form_error_capital_letter: 'Must contain at least one capital letter',
      form_error_number: 'Must contain at least one number',
      form_error_match: 'Password does not match',
      create_password: 'Create your Master password',
      repeat_password: 'Repeat your Master password',
      hint_description:
        'You can also create a hint to help you remember your master password.',
      create_hint: 'Create your hint to remember your password (optional)',
      feedback_success_title: 'Your Password Manager is already created!',
      feedback_error_title: 'An error has occured',
      feedback_success_description:
        'Your master password has been created successfully.',
      feedback_error_description:
        'We have not been able to modify your Master Password. Try again later.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
