create database online_hotel_reservation;
use online_hotel_reservation;
create table user (
  user_id int auto_increment,
  first_name varchar(15) not null,
  last_name varchar(15) not null,
  email text not null,
  SSN char(14) not null,
  mobile_number int null,
  address text not null,
  birthday date not null,
  card_number char(16) null,
  exp_date date null,
  password text not null,
  is_admin boolean default false,
  primary key (user_id)
);
create table roomtype(
  room_type_ID int not null,
  type text not null,
  max_guest int not null,
  describtion text not null,
  price_day float not null,
  price_weekend float not null,
  img_src text not null,
  primary key (room_type_ID)
);
create table rooms (
  room_ID int not null,
  room_type_ID int not null,
  room_number int not null,
  floor_number int not null,
  primary key (room_ID),
  foreign key (room_type_ID) references roomtype (room_type_ID)
);
create table reservation (
  res_Id int auto_increment,
  user_id int not null,
  room_ID int not null,
  no_of_guests int not null,
  check_in date not null,
  check_out date not null,
  payment char(4) null,
  total_price float not null,
  primary key (res_Id),
  foreign key (user_id) references user (user_id),
  foreign key (room_ID) references rooms (room_ID)
);
insert into user(
    first_name,
    last_name,
    email,
    SSN,
    mobile_number,
    address,
    birthday,
    password,
    is_admin
  )
values(
    'kholoud',
    'elbaroudy',
    'admin5122@admin.com',
    '12345678910114',
    01065648683,
    'el_mokattam',
    '1999-9-6',
    'Kh4190183',
    true
  );
insert into roomtype(
    room_type_ID,
    type,
    max_guest,
    describtion,
    price_day,
    price_weekend,
    img_src
  )
values(
    01,
    'Single Room',
    2,
    'one bed',
    300.00,
    450.00,
    "https://www.almrsal.com/wp-content/uploads/2014/12/White-Comfortable-Sofa-In-A-Modern-Stylish-Bedroom-With-Wall-Decor.jpg"
  );
insert into roomtype(
    room_type_ID,
    type,
    max_guest,
    describtion,
    price_day,
    price_weekend,
    img_src
  )
values(
    02,
    'Double Room',
    4,
    'two beds',
    600.00,
    900.00,
    "https://www.almrsal.com/wp-content/uploads/2013/12/twin-beds-boxwood-interiors.jpg"
  );
insert into roomtype(
    room_type_ID,
    type,
    max_guest,
    describtion,
    price_day,
    price_weekend,
    img_src
  )
values(
    03,
    'Family Room',
    6,
    'three beds',
    900.00,
    1350.00,
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/89274943.webp?k=d7be735d2112c1eecac7ce0b2a0998eb8cf514763a9f9428d8d1d29d051734e0&o="
  );
insert into rooms(
    room_ID,
    room_type_ID,
    room_number,
    floor_number
  )
values(100, 01, 1, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(101, 01, 2, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(102, 01, 3, 1);
insert into rooms(
    room_ID,
    room_type_ID,
    room_number,
    floor_number
  )
values(103, 01, 4, 1);
insert into rooms(
    room_ID,
    room_type_ID,
    room_number,
    floor_number
  )
values(104, 01, 5, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(105, 01, 6, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(106, 01, 7, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(107, 01, 8, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(108, 01, 9, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(109, 01, 10, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(110, 01, 11, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(111, 01, 12, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(112, 01, 13, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(113, 01, 14, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(114, 01, 15, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(115, 01, 16, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(116, 01, 17, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(117, 01, 18, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(118, 01, 19, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(119, 01, 20, 1);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(120, 02, 21, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(121, 02, 22, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(122, 02, 23, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(123, 02, 24, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(124, 02, 25, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(125, 02, 26, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(126, 02, 27, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(127, 02, 28, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(128, 02, 29, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(129, 02, 30, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(130, 02, 31, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(131, 02, 32, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(132, 02, 33, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(133, 02, 34, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(134, 02, 35, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(135, 02, 36, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(136, 02, 37, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(137, 02, 38, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(138, 02, 39, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(139, 02, 40, 2);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(140, 03, 41, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(141, 03, 42, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(142, 03, 43, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(143, 03, 44, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(144, 03, 45, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(145, 03, 46, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(146, 03, 47, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(147, 03, 48, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(148, 03, 49, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(149, 03, 50, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(150, 03, 51, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(151, 03, 52, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(152, 03, 53, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(153, 03, 54, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(154, 03, 55, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(155, 03, 56, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(156, 03, 57, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(157, 03, 58, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(158, 03, 59, 3);
insert into rooms(room_ID, room_type_ID, room_number, floor_number)
values(159, 03, 60, 3);