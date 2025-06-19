-- CreateTable
CREATE TABLE `personagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `vida` INTEGER NOT NULL,
    `ataque` INTEGER NOT NULL,
    `defesa` INTEGER NOT NULL,
    `estamina` INTEGER NOT NULL,
    `velocidade` INTEGER NOT NULL,
    `critico` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `arma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `ataque` INTEGER NOT NULL,
    `estamina` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
