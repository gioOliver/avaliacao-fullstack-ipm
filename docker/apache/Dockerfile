FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql

RUN a2enmod rewrite

COPY docker/apache/default.conf /etc/apache2/sites-available/000-default.conf

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY backend/ /var/www/html/

RUN composer install --no-interaction --prefer-dist

EXPOSE 80

CMD ["apache2-foreground"]