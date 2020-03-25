-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2020 at 01:55 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `numer`
--

-- --------------------------------------------------------

--
-- Table structure for table `backward`
--

CREATE TABLE `backward` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `backward`
--

INSERT INTO `backward` (`id`, `equation`) VALUES
(1, 'x^3');

-- --------------------------------------------------------

--
-- Table structure for table `bisection`
--

CREATE TABLE `bisection` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bisection`
--

INSERT INTO `bisection` (`id`, `equation`) VALUES
(1, 'x^4-13'),
(2, 'x^10-1'),
(3, 'x^2+3');

-- --------------------------------------------------------

--
-- Table structure for table `central`
--

CREATE TABLE `central` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `central`
--

INSERT INTO `central` (`id`, `equation`) VALUES
(1, 'x^3');

-- --------------------------------------------------------

--
-- Table structure for table `falseposition`
--

CREATE TABLE `falseposition` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `falseposition`
--

INSERT INTO `falseposition` (`id`, `equation`) VALUES
(1, '43*x-1'),
(2, '14*x-1');

-- --------------------------------------------------------

--
-- Table structure for table `firstforward`
--

CREATE TABLE `firstforward` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `firstforward`
--

INSERT INTO `firstforward` (`id`, `equation`) VALUES
(1, 'x^3');

-- --------------------------------------------------------

--
-- Table structure for table `newton`
--

CREATE TABLE `newton` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `newton`
--

INSERT INTO `newton` (`id`, `equation`) VALUES
(1, 'x^2-7'),
(2, 'cos(x)-2x'),
(3, 'sin(x)-x^2');

-- --------------------------------------------------------

--
-- Table structure for table `onepoint`
--

CREATE TABLE `onepoint` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `onepoint`
--

INSERT INTO `onepoint` (`id`, `equation`) VALUES
(1, 'e^-x'),
(2, '1/4+x/2'),
(3, '4*e^-x');

-- --------------------------------------------------------

--
-- Table structure for table `secant`
--

CREATE TABLE `secant` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `secant`
--

INSERT INTO `secant` (`id`, `equation`) VALUES
(1, 'x^2-7'),
(2, '2e^x+x-4');

-- --------------------------------------------------------

--
-- Table structure for table `simpson`
--

CREATE TABLE `simpson` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `simpson`
--

INSERT INTO `simpson` (`id`, `equation`) VALUES
(1, 'x^7+2*x^3-1'),
(2, '2*x^3-5*x^2+3*x+1');

-- --------------------------------------------------------

--
-- Table structure for table `trapezoidal`
--

CREATE TABLE `trapezoidal` (
  `id` int(11) NOT NULL,
  `equation` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `trapezoidal`
--

INSERT INTO `trapezoidal` (`id`, `equation`) VALUES
(1, '2*x^3-5*x^2+3*x+1'),
(2, '4*x^5-3*x^4+x^3-6*x+2'),
(3, '2x^3-5x^2+3x+1'),
(4, 'x^2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `backward`
--
ALTER TABLE `backward`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bisection`
--
ALTER TABLE `bisection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `central`
--
ALTER TABLE `central`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `falseposition`
--
ALTER TABLE `falseposition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `firstforward`
--
ALTER TABLE `firstforward`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newton`
--
ALTER TABLE `newton`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `onepoint`
--
ALTER TABLE `onepoint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `secant`
--
ALTER TABLE `secant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `simpson`
--
ALTER TABLE `simpson`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trapezoidal`
--
ALTER TABLE `trapezoidal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `backward`
--
ALTER TABLE `backward`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bisection`
--
ALTER TABLE `bisection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `central`
--
ALTER TABLE `central`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `falseposition`
--
ALTER TABLE `falseposition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `firstforward`
--
ALTER TABLE `firstforward`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `newton`
--
ALTER TABLE `newton`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `onepoint`
--
ALTER TABLE `onepoint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `secant`
--
ALTER TABLE `secant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `simpson`
--
ALTER TABLE `simpson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trapezoidal`
--
ALTER TABLE `trapezoidal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
