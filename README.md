# react-modal-plugin-ad

![npm](https://img.shields.io/npm/v/react-modal-plugin-ad)
![license](https://img.shields.io/npm/l/react-modal-plugin-ad)
![downloads](https://img.shields.io/npm/dw/react-modal-plugin-ad)

## Vue d'ensemble

`react-modal-plugin-ad` est un plugin de modal polyvalent et personnalisable pour les applications React, avec un support publicitaire intégré. Il aide les développeurs à créer des modales rapidement et efficacement tout en intégrant des publicités pour la monétisation.

## Installation

Installez via npm :

```sh
npm install react-modal-plugin-ad
```
## Utilisations

````jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal-plugin-ad';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir Modal</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Titre du Modal</h2>
        <p>Contenu du Modal</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

````

### Props

- `isOpen` (boolean) : Indique si la modal est ouverte.
- `onRequestClose` (function) : Fonction à appeler lorsque la fermeture de la modal est demandée.
- `adContent` (node) : Contenu pour la section publicitaire de la modal.

### Personnalisation

Vous pouvez personnaliser la modal en passant des props supplémentaires et en utilisant du CSS pour le style.


### Licence

Ce projet est sous licence ISC.

### Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour toute modification ou suggestion.

> **Note :** Ce projet nécessite Node.js version 14 ou supérieure et est de préférence développé avec [Visual Studio Code (VSCode)](https://code.visualstudio.com/).


