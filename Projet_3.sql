-- phpMyAdmin SQL Dump
-- version 4.4.15.8
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 02, 2017 at 11:04 PM
-- Server version: 5.6.31
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Projet`
--
CREATE DATABASE IF NOT EXISTS `Projet` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Projet`;

-- --------------------------------------------------------

--
-- Table structure for table `Deck`
--

CREATE TABLE IF NOT EXISTS `Deck` (
  `ID_Card` int(11) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Damages` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Deck`
--

INSERT INTO `Deck` (`ID_Card`, `Type`, `Damages`) VALUES
(1, 'middle', 10),
(2, 'high', 11),
(3, 'low', 10),
(4, 'high', 50),
(5, 'middle', 12),
(6, 'middle', 42),
(7, 'guard', 10),
(8, 'guard', 10),
(9, 'middle', 10),
(10, 'low', 10);

-- --------------------------------------------------------

--
-- Table structure for table `Hand`
--

CREATE TABLE IF NOT EXISTS `Hand` (
  `ID_Hand` int(11) NOT NULL,
  `ID_Card` int(11) NOT NULL,
  `ID_Player` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=591 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Hand`
--

INSERT INTO `Hand` (`ID_Hand`, `ID_Card`, `ID_Player`) VALUES
(569, 10, 1),
(579, 7, 1),
(581, 7, 2),
(584, 8, 1),
(587, 5, 2),
(589, 5, 1),
(590, 8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Players`
--

CREATE TABLE IF NOT EXISTS `Players` (
  `ID_Player` int(11) NOT NULL,
  `Login` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Life` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Players`
--

INSERT INTO `Players` (`ID_Player`, `Login`, `Password`, `Life`) VALUES
(1, 'Player1', 'aze', 100),
(2, 'Player2', 'eza', 100);

-- --------------------------------------------------------

--
-- Table structure for table `Turn`
--

CREATE TABLE IF NOT EXISTS `Turn` (
  `ID_Turn` int(11) NOT NULL,
  `ID_Player` int(11) NOT NULL,
  `CardPlayed` int(11) NOT NULL,
  `Meteor` int(11) NOT NULL,
  `HasPlayedAnim` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Turn`
--

INSERT INTO `Turn` (`ID_Turn`, `ID_Player`, `CardPlayed`, `Meteor`, `HasPlayedAnim`) VALUES
(1, 1, 9, -1, 0),
(2, 2, 9, -1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Deck`
--
ALTER TABLE `Deck`
  ADD PRIMARY KEY (`ID_Card`);

--
-- Indexes for table `Hand`
--
ALTER TABLE `Hand`
  ADD PRIMARY KEY (`ID_Hand`);

--
-- Indexes for table `Players`
--
ALTER TABLE `Players`
  ADD PRIMARY KEY (`ID_Player`);

--
-- Indexes for table `Turn`
--
ALTER TABLE `Turn`
  ADD PRIMARY KEY (`ID_Turn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Deck`
--
ALTER TABLE `Deck`
  MODIFY `ID_Card` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `Hand`
--
ALTER TABLE `Hand`
  MODIFY `ID_Hand` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=591;
--
-- AUTO_INCREMENT for table `Turn`
--
ALTER TABLE `Turn`
  MODIFY `ID_Turn` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
