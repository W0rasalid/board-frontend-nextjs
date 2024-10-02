## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

## Running the UI Document (Storybook)

```bash
# run document
$ npm run storybook
```

## URL
```bash
# Application URL
http://localhost:3003

# Document URL
http://localhost:6006
```

## User for Login
```bash
### Role Admin ###
username: admin
password: 1234

### Role User (form login) ###
username: guest
password: 12345
```

### User for (google login) ###
```bash
your Gmail to Login
```

### Other Feature WithOut Requirement ###
1. Observability (With Swagger Stats)
2. Monitor Metric Stats (With Grafana Dashboard) 
3. Monitor Log (With Grafana )
4. UI Document (With Storybook)
5. Sign In With Google (ใช้ OAuth ในการ login และ register เพื่อเข้าใช้งาน)

*** ในการดู monitor ต้องใช้ user ที่เป็น admin ในการ login (เท่านั้น)

### Role ในระบบ ###
ในระบบ แบ่ง role ได้ 2 ประเภท 
1. role admin (สิทธิ์ในการเห็น เมนู monitor)
2. role user (สิทธิ์ในการ สร้าง, แก้ไข, ลบ) ข้อมูลของตนเอง
3. role guest (เฉพาะดูข้อมูล)

ในการเข้า่ใขช้งานระบบ จะแบ่งได้ 3 ช่องทางคือ
1. เข้าใช้งาน แบบไม่ login (คลิกปุ่ม Continute with out login) จะสามารถดูข้อมูลได้อย่างเดียว ไม่สามารถสร้่าง, แก้ไข , ลบ ข้อมูลใดๆ
2. เข้าใช้งาน ผ่านการกรอก user , password จะสามารถ ดูข้อมูลได้ และ สร้าง,แก้ไข,ลบ ข้อมูลของตนเอง
3. เข้าใช้งาน ผ่าน google signin จะสามารถ ดูข้อมูลได้ และ สร้าง,แก้ไข,ลบ ข้อมูลของตนเอง
