
# ฟังก์ชัน Middleware

**Middleware function** คือฟังก์ชันที่สามารถเข้าถึง request object (`req`), response object (`res`) และมีฟังก์ชัน `next` สำหรับการเรียก middleware ถัดไปในลำดับการทำงาน

---

# express.Router()

**Router** เป็นฟังก์ชันใน Express ที่ใช้สำหรับการกำหนดเส้นทาง URL หรือ endpoints

```javascript
router.get('/', (req, res, next) => {
  // จัดการ request
});
```

- `'/'` เป็นการประกาศ endpoint สำหรับการเข้าถึง root ของเว็บไซต์ เช่น `localhost:3000/`
- `(req, res, next)` คือ middleware function ที่ใช้ในการจัดการ object ระหว่าง request และ response

---

### ตัวอย่าง: การใช้งาน Router ในแอป Express

1. **ใน `app.js`:**

```javascript
app.use('/home', homeController);
```

โค้ดนี้เป็นการกำหนดเส้นทาง URL ส่วนแรก (`/home`) และเชื่อมโยงกับ `homeController` เพื่อใช้งานฟังก์ชันจากไฟล์ `home.js` จะต้องเข้าถึง path นี้ก่อน เช่น:

- การเข้าถึง `localhost:3000/home` จะนำไปสู่ `homeController`

2. **ใน `home.js`:**

```javascript
router.get('/bedroom', (req, res) => {
  // จัดการ request สำหรับ /bedroom
});
```

ตัวอย่างนี้ การเข้าถึง `localhost:3000/home/bedroom` จะเรียกฟังก์ชันที่กำหนดในเส้นทาง `/bedroom` ภายใน `home.js`

---

### สรุป

- **Middleware function** ใน Express ช่วยให้สามารถจัดการกับ `req` และ `res` ได้อย่างยืดหยุ่น และสามารถควบคุมการเดินทางของข้อมูลด้วยฟังก์ชัน `next`
- ฟังก์ชัน **Router** ช่วยให้คุณสามารถกำหนดเส้นทาง URL และเชื่อมโยงกับไฟล์คอนโทรลเลอร์ต่าง ๆ ซึ่งช่วยให้แอป Express ของคุณมีโครงสร้างที่ดีขึ้นและสามารถจัดการได้ง่าย
