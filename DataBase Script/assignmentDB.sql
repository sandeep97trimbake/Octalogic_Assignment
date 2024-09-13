/*
SQLyog Community Edition- MySQL GUI v8.12 
MySQL - 5.5.19 : Database - assignment
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`assignment` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `assignment`;

/*Table structure for table `booking` */

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `Bid` bigint(20) NOT NULL AUTO_INCREMENT,
  `Cid` bigint(20) DEFAULT NULL,
  `vid` bigint(20) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `toDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `booking` */

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `CId` bigint(20) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  PRIMARY KEY (`CId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `customer` */

/*Table structure for table `questionmaster` */

DROP TABLE IF EXISTS `questionmaster`;

CREATE TABLE `questionmaster` (
  `Qid` bigint(20) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `field` varchar(255) NOT NULL,
  `count` int(11) DEFAULT '1',
  `fieldType` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Qid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `questionmaster` */

insert  into `questionmaster`(`Qid`,`question`,`field`,`count`,`fieldType`) values (1,'What is your name','input',2,'text'),(2,'Number of wheels','input',2,'radio'),(3,'Type of vehicle','input',0,'radio'),(4,'Specific Model','input',0,'radio'),(5,'Date range picker','input',0,'date');

/*Table structure for table `vehicalcatagory` */

DROP TABLE IF EXISTS `vehicalcatagory`;

CREATE TABLE `vehicalcatagory` (
  `VTId` bigint(20) NOT NULL AUTO_INCREMENT,
  `catagory` varchar(255) NOT NULL,
  PRIMARY KEY (`VTId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `vehicalcatagory` */

insert  into `vehicalcatagory`(`VTId`,`catagory`) values (1,'hatchback'),(2,'suv'),(3,'sedan'),(4,'cruiser'),(5,'sports');

/*Table structure for table `vehicle` */

DROP TABLE IF EXISTS `vehicle`;

CREATE TABLE `vehicle` (
  `Vid` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL COMMENT '1)two wheeler 2)four wheeler',
  `category` bigint(20) NOT NULL,
  `ordQty` int(11) NOT NULL,
  PRIMARY KEY (`Vid`),
  KEY `categoryindex` (`category`),
  CONSTRAINT `FK_vehicle` FOREIGN KEY (`category`) REFERENCES `vehicalcatagory` (`VTId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `vehicle` */

insert  into `vehicle`(`Vid`,`name`,`type`,`category`,`ordQty`) values (1,'car1',2,2,0),(2,'car2',2,1,0),(3,'car3',2,3,0),(4,'bike1',1,4,0),(5,'bike2',1,5,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
