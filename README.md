# Sequelize Mock with Jest Demo App
Demonstrates usage of sequelize-mock with Jest 


# Notes

Creating DB table with any SQL tools

```
create table USER
(
  USER_ID          int(12) auto_increment
    primary key,
  EMAIL_ID         varchar(255) not null,
  FIRST_NAME       varchar(255) not null,
  LAST_NAME        varchar(255) null,
  CRE_TS           datetime     not null,
  UPD_TS           datetime     null,
  CRE_USER_ID    varchar(256) not null,
  UPD_USR_ID   varchar(256) null
);
```

Inserting value to DB

```
Insert into USER (email_id, first_name, last_name, cre_ts, cre_user_id) values ('abc@test.com', 'Hello', 'World', sysdate(), user());

```

Generating models

```
sequelize-auto -o "./src/main/models" -a .sequelize-auto.cfg.js -d somedbname -h <mydb.somehost.com> -u <myuser> -p 3306 -x <mypassword> -e mysql -t USER -C
```


# To run this
> npm test


