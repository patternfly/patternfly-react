const pageHeader = {
  alert: `Patternfly sera mis à jour à 2.13.5 à 00:00, 23 Sep 2018 (UTC). Cette mise à jour durera de 8 à 12 heures, veuillez planifier à l'avance pour cette panne.`,
  logo: 'Patternfly',
  caption: `Utilisez cette zone pour placer des informations ou un message d'introduction sur votre application qui peut être pertinent pour utilisateurs.`
};

const footerLinks = [
  { children: "Conditions d'utilisation", href: '#' },
  { children: 'Aidez-moi', href: '#' },
  { children: 'Politique de confidentialité', href: '#' }
];

const cardHeader = {
  title: 'Connectez-vous à votre compte',
  selectedLanguage: { value: 'fr', text: 'Français' },
  availableLanguages: [{ value: 'en', text: 'Anglais' }, { value: 'fr', text: 'Français' }]
};

const signUp = {
  label: "Besoin d'un compte?",
  link: {
    label: "S'inscrire"
  }
};

const rememberMe = 'Restez connecté pendant 30 jours';

const forgotPassword = 'mot de passe oublié?';

const form = {
  error: 'Votre compte a été bloqué Contactez votre administrateur pour le débloquer.',
  submitText: "S'identifier"
};

const passwordField = {
  placeholder: 'Mot de passe',
  errors: {
    empty: 'Veuillez entrer votre mot de passe.',
    short: 'Mot de passe trop court, la longueur minimale est de 8 caractères'
  },
  warnings: {
    capsLock: 'Le verrouillage des majuscules est actuellement activé.'
  }
};

const usernameField = {
  placeholder: 'Adresse e-mail',
  errors: {
    empty: "S'il vous plaît entrer votre email.",
    invalid: 'Votre email est invalide'
  }
};

const card = {
  header: cardHeader,
  form,
  passwordField,
  usernameField,
  rememberMe,
  forgotPassword,
  signUp
};

export default {
  header: pageHeader,
  footerLinks,
  card
};
