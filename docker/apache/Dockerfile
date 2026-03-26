FROM php:8.2-apache

# Extensoes php
RUN docker-php-ext-install pdo pdo_mysql

# Ativa rewrite para o router
RUN a2enmod rewrite

# Copia as configs do apache para detro do container
COPY docker/apache/default.conf /etc/apache2/sites-available/000-default.conf

# Instala composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer