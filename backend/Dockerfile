
#Starting with the official lightweight PHP 8.3 CLI
FROM php:8.4-cli

#1. Install system dependencies (git, curl, zip, and Postgres dev libraries)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

#2. Intall PHP extensions
#! CRUCIAL! pdo_pgsql enables Laravel to talk to PostgreSQL!
RUN docker-php-ext-install pdo pdo_pgsql zip

#3. Get the latest composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

#4. Set the working directory inside the container
WORKDIR /var/www

#5. Copy composer files and install dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader

#6. Copy the rest of the application
COPY . .
RUN composer dump-autoload --optimize

# 7.Expose port 8000 for artisan serve
EXPOSE 8000

#8. Default command to run Laravel's development server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

