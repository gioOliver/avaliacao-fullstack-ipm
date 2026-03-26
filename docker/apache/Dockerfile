FROM php:8.2-apache

# Instalar extensões necessárias
RUN docker-php-ext-install pdo pdo_mysql

# Habilitar mod_rewrite (pra rotas depois)
RUN a2enmod rewrite

# Copiar config do apache
COPY docker/apache/default.conf /etc/apache2/sites-available/000-default.conf