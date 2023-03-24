-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2023 at 10:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_course`
--

CREATE TABLE `tbl_course` (
  `course_id` int(11) NOT NULL,
  `course` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `preview` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_course`
--

INSERT INTO `tbl_course` (`course_id`, `course`, `category`, `imageUrl`, `preview`) VALUES
(2, 'test11@11', '11111111', 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80', '12331'),
(3, 'test11@11', '11111111', 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80', '12331'),
(4, 'test11@11', '11111111', 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80', '12331'),
(5, 'dasd', 'asdas', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVEhUYGBIYEhgYGBkYGhgYGBgYGBgZGRgYGBkcIS4lHB4rHxgYJjgmKy8xNTU2GiQ7QDs0Py40NTQBDAwMEA8QHxISHzEsJSs0NDQ0ND00NDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVEhUYGBIYEhgYGBkYGhgYGBgYGBgZGRgYGBkcIS4lHB4rHxgYJjgmKy8xNTU2GiQ7QDs0Py40NTQBDAwMEA8QHxISHzEsJSs0NDQ0ND00NDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/'),
(6, 'dsada', 'dsad', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(7, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(8, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(9, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(10, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(11, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(12, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(13, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(14, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(15, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(16, 'adsdas', 'dsadsa', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(17, 'fsdf', 'sdf', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(18, 'das', 'sadas', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg', 'https://www.vz.ae/wp-content/uploads/2022/09/best-online-course-platforms.jpg'),
(19, 'Become a knowledgeable tourist guide in just 10 da', 'Course', 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80', 'Our 10-day course is designed for those who are new to the industry and want to get started quickly. In this course, you will learn the basics of guiding, including customer service, communication skills, and safety guidelines.\\'),
(20, 'Become a professional tourist guide in 30 days', 'Course', 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80', 'Our 30-day course is a more comprehensive program that goes into greater depth on the topics covered in the 10-day course. In addition to the basics, you will also learn about more specialized areas such as ecotourism, adventure tourism, and cultural tour');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user`, `email`, `password`, `firstname`, `lastname`) VALUES
(8, 'kittiphone@gmail.com', '$2b$10$yzdRHVCnsbmJ8OSp3wMpJeO2xIEFGaLe84mdAW4aidp', 'nou', 'noy'),
(9, 'kittiphone@gmail.com', '$2b$10$DdOcFJ6FUY9kgpmDNiRPZOOFoYf8LngXS2hhSRIeDDg', 'nou', 'noy'),
(10, 'koki@gmail.com', '$2b$10$/eGp8ZxC6y9WU5ZGAjLt3.jrlY3rZjnu2VWFWm5Yfd0RgG7hH55Vi', 'nou1', 'noy1'),
(11, 'koki@gmail.com', '$2b$10$ZUr2AnpBQwpQWuUkWvs5qOpMqMXzo5t4FhJvdw50WB60vWDxyg426', 'nou1', 'noy1'),
(12, '', '$2b$10$Bbnj8fukCq04OG1xxMTWzObcimSPiRruDgRotxQ3.AYyeuLCbw0pi', 'dsa', ''),
(13, 'kok2131@gmail.com', '$2b$10$GNdIvDcV71iZmr/fep4DbuGXe87MOGJOZd0sn9QJtWHkw83Cxa4QO', 'ads', 'sad'),
(14, 'koki@gmail.com', '$2b$10$/dJpDtTswDsQ49UymEWQjeTDcYwYCBKuCssp057SVYqlbbrczenJ.', 'dsa', 'dasd'),
(15, 'koki@gmail.com', '$2b$10$pUw68Q05dZv8k.8U5S0Sled0zrXrWFT4vu5pUFeXeaTcVi3MlUh6y', 'dsa', 'dasd'),
(16, 'koki@gmail.com', '$2b$10$InW57QEAQYBGuzzaRFuI3e6hCSonf/RNa/SoAdCe0gz17KX3pxS9.', 'dsa', 'dsaf'),
(17, 'koki@gmail.com', '$2b$10$kGmgLNs7MQgTLR/WcBSeguK3iAw9O9aJ2SsAXqu9jverZo59Czu.u', 'dsadsa', 'dsad'),
(18, 'sadsad', '$2b$10$ct/HopHBJCoJQs4Jiv2aDOTiYNF/wehV6n6J9c7VwgmcLf5NJnbHW', 'das', 'dasd'),
(19, 'koki@gmail.com', '$2b$10$zsTyNB.EB6PVVwLEAFNFJO1yYRXF0dTuWvkLHoV3KqpWfn8L7NmYG', 'dsadsa', 'dsad'),
(20, 'koki@gmail.com', '$2b$10$noBbnePCZufTcpOejg6uDee1D/TePbzCIT8GfW4ePyCtT7sldIP0S', 'dsadsa', 'dsad'),
(21, 'koki@gmail.com', '$2b$10$eghTcE8qFFMoDbTZESAvCOXJIH3Z6x/p76YLmOP/c.aO07Ij3kY1m', 'das', 'dsada'),
(22, 'koki@gmail.com', '$2b$10$MtcvaGLbtOKJojdXm77a.Or3BCqLGwZNpOhG.acr4biRnX1ug3MUi', 'fds', 'ff'),
(23, 'koki@gmail.com', '$2b$10$Q30h.v2mH9NF92RiY5KPLepS1ky0Ee18L/cjSwja5OciA8x62ZXke', 'fds', 'ff'),
(24, 'fdsfds@dsad', '$2b$10$hbt3UajvP3f9Pguj.MdzdOARnN9F383nNLSxu7HiHNiNyWQOEvSXW', 'fsd', 'fsdf'),
(25, 'test@gmail.com', '$2b$10$xejASsvYNDI505VodFQMg.gVOVI1BLkUSCzQpoug8uphGhwc8Ops.', 'nou', 'noy'),
(26, 'test@gm2ail.com', '$2b$10$mhIAQi140MTvs1qlpJ0GFuGxr9ttCaKAA2X4jWaDa5ZVADwxlph72', 'nou', 'noy'),
(27, 'test11@11', '$2b$10$jCJWpuf3Yuj7fTvGkED2QevNGhh5h6h2IZU51i/x8.Cz.ijcZQ1Ju', 'fsd', 'fsdf'),
(28, 'koki@gmail.com', '$2b$10$wvUir/tdNYZk7U0CYsZfRuBg/rNtklkYoRv165H8Fz5AqtIgpSrpu', 'dsad', 'sadsa'),
(29, 'kok11111@gmail.com', '$2b$10$Y3XkpVqSgV4ISVFAs1XXme6mANUSdJBB0kGa5bXd83YosJHK/B1ci', '11111111', '11111111'),
(30, 'koki@gmail.com', '$2b$10$yd2/9kJ0ZVC8Bza5BIFwiOmo/BewDXVb59SXkti3AP3HgvyaUFSJm', '22222', '222222'),
(31, 'kok2i@gmail.com', '$2b$10$WVEnZSFpNIQY6Z8Sv/m7d.838e3hU9r7RMvebUgHwCwOPLWyvwCBe', 'das', 'dasd'),
(32, 'koki23@gmail.com', '$2b$10$k0Lzo5qLIga8T6zt2jxSuuJZR84eptw2vaohiRqqohcoRiu79Hvc6', 'sad', 'dsa'),
(33, 'fdsfds@gmail.com', '$2b$10$RVTNY5LtyfAvW7SfT/H0weWV1Rx3nef47YeJL.hs3hQikZW1sb5sC', 'fds', 'fdsads'),
(34, 'koki32@gmail.com', '$2b$10$XSLF3CpcBia42UEITGJNSOJmLD8OXvw2J8NkFPxB4ZeEde0HwPUTG', 'sdad', 'sasad'),
(35, 'kok23i@gmail.com', '$2b$10$6atKrr6CGtx/ld2KWCBUAOl5TkXJdXnoLN6zfzhdmaGJAx.5r0B6u', 'asdasdas', 'dasdsa'),
(36, 'koki@GAMLAKXSAdsLDf', '$2b$10$NjarCWbwjFUT1evEtX8SweD9aAmfVqCIyNodeOyge5ESCmJmowzXW', 'fdsf', 'sdf'),
(37, 'dfd@dadsa', '$2b$10$t5.DlpqFBuOUwWUkkI0VN.kMwW7ULvWdKrI.3t5/YYq4Z/3X1GTA2', 'fdad', 'fdsads');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `plan` varchar(255) NOT NULL,
  `option1` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `email`, `password`, `plan`, `option1`) VALUES
(1, 'kittiphone@gmail.com', '1234', 'kittiphone@gmail.com', '1234'),
(2, 'fsd', 'fds', '', ''),
(3, '', '', '', ''),
(4, '', '', '', ''),
(5, '', '', '', ''),
(6, 'fsdfds', 'dsf', '', ''),
(7, 'fsdfds', 'dsf', '', ''),
(8, 'fsdfds', 'dsf', '', ''),
(9, 'fsdfds', 'dsf', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_course`
--
ALTER TABLE `tbl_course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_course`
--
ALTER TABLE `tbl_course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
