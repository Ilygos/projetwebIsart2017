-- phpMyAdmin SQL Dump
-- version 4.4.15.8
-- https://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 26 Avril 2017 à 14:15
-- Version du serveur :  5.6.31
-- Version de PHP :  5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Projet`
--
CREATE DATABASE IF NOT EXISTS `Projet` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Projet`;

-- --------------------------------------------------------

--
-- Structure de la table `Deck`
--

CREATE TABLE IF NOT EXISTS `Deck` (
  `ID_Card` int(11) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Damages` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Deck`
--

INSERT INTO `Deck` (`ID_Card`, `Type`, `Damages`) VALUES
(1, 'Front', 10),
(2, 'high', 11),
(3, 'Left', 10),
(5, 'Guard', 12),
(6, 'Front', 42);

-- --------------------------------------------------------

--
-- Structure de la table `Hand`
--

CREATE TABLE IF NOT EXISTS `Hand` (
  `ID_Hand` int(11) NOT NULL,
  `ID_Card` int(11) NOT NULL,
  `ID_Player` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Hand`
--

INSERT INTO `Hand` (`ID_Hand`, `ID_Card`, `ID_Player`) VALUES
(1, 2, 1),
(2, 3, 1),
(3, 5, 1);

-- --------------------------------------------------------

--
-- Structure de la table `Players`
--

CREATE TABLE IF NOT EXISTS `Players` (
  `ID_Player` int(11) NOT NULL,
  `Login` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Life` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Players`
--

INSERT INTO `Players` (`ID_Player`, `Login`, `Password`, `Life`) VALUES
(1, 'Player1', 'aze', 0),
(2, 'Mouloud', 'Jesuisbougnoul', 0);

-- --------------------------------------------------------

--
-- Structure de la table `Turn`
--

CREATE TABLE IF NOT EXISTS `Turn` (
  `ID_Turn` int(11) NOT NULL,
  `ID_Player` int(11) NOT NULL,
  `CardPlayed` int(11) NOT NULL,
  `Meteor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Deck`
--
ALTER TABLE `Deck`
  ADD PRIMARY KEY (`ID_Card`);

--
-- Index pour la table `Hand`
--
ALTER TABLE `Hand`
  ADD PRIMARY KEY (`ID_Hand`),
  ADD UNIQUE KEY `ID_Card` (`ID_Card`) USING BTREE,
  ADD UNIQUE KEY `ID_Hand` (`ID_Hand`,`ID_Player`),
  ADD KEY `ID_Player` (`ID_Player`);

--
-- Index pour la table `Players`
--
ALTER TABLE `Players`
  ADD PRIMARY KEY (`ID_Player`);

--
-- Index pour la table `Turn`
--
ALTER TABLE `Turn`
  ADD PRIMARY KEY (`ID_Turn`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Deck`
--
ALTER TABLE `Deck`
  MODIFY `ID_Card` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `Hand`
--
ALTER TABLE `Hand`
  MODIFY `ID_Hand` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `Turn`
--
ALTER TABLE `Turn`
  MODIFY `ID_Turn` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Hand`
--
ALTER TABLE `Hand`
  ADD CONSTRAINT `hand_ibfk_1` FOREIGN KEY (`ID_Player`) REFERENCES `Players` (`ID_Player`),
  ADD CONSTRAINT `hand_ibfk_2` FOREIGN KEY (`ID_Card`) REFERENCES `Deck` (`ID_Card`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
