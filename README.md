# Boilerplate service

Author : Artha Prihardana

Email : arthaprihardana@gmail.com

## Teknologi yang digunakan

1.  NodeJS
2.  Mysql
3.  PostgreSQL (coming soon)
4.  MongoDB (coming soon)
5.  Docker
6.  Kubernetes
7.  Gulp
8.  Babel
9.  Javascript Obfuscate
10. dll

## Pengaturan awal

1.  Pengaturan MySQL

    -   Download MySQL image dari Docker Hub [disini](https://hub.docker.com/_/mysql). dengan perintah sbb: 
    
        ```docker pull mysql```

    -   Jalankan MySQL container dengan ketikan perintah sbb: 
        
        ```docker run --name mysqlcontainer -d -e MYSQL_ROOT_PASSWORD='password' -p 3306:3306 mysql:latest --default-authentication-plugin=mysql_native_password```

    -   Bila ingin mengimport dari sql backup ketikan perintah sbb:

        ```docker exec -i mysqlcontainer mysql -u root --password='password' -t < dump.sql```

    -   Bila ingin mengimport dari sql dump ketikan perintah sbb:

        ```docker exec -i mysqlcontainer sh -c 'exec mysql -u root --password="password" --database=nama_database' < load_data.dump```

    -   Coba masuk ke MySQL dengan perintah sbb:

        ```mysql -u root -p -h localhost -P 3306 --protocol=tcp```

    -   Bila sudah berjalan dengan baik maka anda bisa koneksikan dengan MySQL workbence, DbEaver, atau Navicat.

2.  Pengaturan Boilerplate

    -   Buat docker image boilerplate dengan perintah sbb:

        ```docker image build -t nama_service:1.0 .```
    
    -   Jalan docker image dengan perintah sbb:

        ```docker container run --publish PORT:PORT -d --name nama_container nama_service:1.0```

3.  Pengaturan PostgreSQL (comming soon)
4.  Pengaturan MongoDB (coming soon)

## Build Boilerplate 

bersambung ...