-- CreateTable
CREATE TABLE `tbl_gtrans` (
    `gtid` INTEGER NOT NULL AUTO_INCREMENT,
    `olcity` VARCHAR(200) NULL,
    `oltsp` VARCHAR(200) NULL,
    `olname` VARCHAR(200) NULL,
    `gcarange` VARCHAR(100) NULL,
    `gcumobile` VARCHAR(20) NULL,
    `gcwinitem` VARCHAR(100) NULL,
    `sa` VARCHAR(100) NULL,
    `sb` VARCHAR(100) NULL,
    `sc` VARCHAR(100) NULL,
    `gstatus` VARCHAR(10) NULL,
    `gdt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`gtid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_logs` (
    `logid` INTEGER NOT NULL AUTO_INCREMENT,
    `logdt` DATETIME(0) NULL,
    `logtype` VARCHAR(100) NULL,
    `logref` VARCHAR(100) NULL,
    `logtext` TEXT NULL,

    PRIMARY KEY (`logid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_outlet` (
    `olid` INTEGER NOT NULL AUTO_INCREMENT,
    `olregion` VARCHAR(100) NULL,
    `olcity` VARCHAR(100) NULL,
    `oltsp` VARCHAR(100) NULL,
    `olname` VARCHAR(100) NULL,
    `oladd` VARCHAR(200) NULL,
    `olwratio` LONGTEXT NULL,
    `olcreated` DATETIME(0) NULL,

    PRIMARY KEY (`olid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_saleperson` (
    `spid` INTEGER NOT NULL AUTO_INCREMENT,
    `spfullname` VARCHAR(200) NULL,
    `spmobile` VARCHAR(20) NULL,
    `spcreated` DATETIME(0) NULL,
    `spstatus` VARCHAR(10) NULL,

    PRIMARY KEY (`spid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_settings` (
    `setid` INTEGER NOT NULL AUTO_INCREMENT,
    `settitle` VARCHAR(200) NULL,
    `setvalue` LONGTEXT NULL,

    PRIMARY KEY (`setid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_survey` (
    `svid` INTEGER NOT NULL AUTO_INCREMENT,
    `svq` VARCHAR(500) NULL,
    `sva1` VARCHAR(200) NULL,
    `sva2` VARCHAR(200) NULL,
    `sva3` VARCHAR(200) NULL,

    PRIMARY KEY (`svid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_sysuser` (
    `sysuid` INTEGER NOT NULL AUTO_INCREMENT,
    `sysufulln` VARCHAR(200) NULL,
    `sysumobile` VARCHAR(20) NULL,
    `sysuemail` VARCHAR(100) NULL,
    `sysuauth` VARCHAR(20) NULL,
    `sysutype` VARCHAR(50) NULL,
    `sysucreated` DATETIME(0) NULL,

    PRIMARY KEY (`sysuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('User', 'Admin') NOT NULL DEFAULT 'Admin',
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
