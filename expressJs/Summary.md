
# การสร้างและใช้งาน Controller และ Model ใน Node.js

## 1. การสร้าง Controller ใน Node.js
Controller คือส่วนที่ทำหน้าที่รับคำขอ (request) จาก client และส่งข้อมูลกลับไปเป็นการตอบสนอง (response) การสร้าง function ใน controller นั้นมักถูกแยกออกมาเพื่อให้โค้ดมีการจัดระเบียบง่ายต่อการจัดการ


## 2. การกำหนดเส้นทาง (Routes)
การกำหนด routes เพื่อทำการ map endpoint เข้ากับ controller โดยจะกำหนดเส้นทางการเข้าถึง function ใน controller นั้น ๆ ผ่าน URL

## 3. การสร้างและใช้งาน Model
Model มักจะเป็นตัวแทนของข้อมูลจากฐานข้อมูล การสร้าง constructor ใน Model เพื่อกำหนด field นั้น ๆ และหากมีการสืบทอดจากคลาสแม่ จะต้องเรียก `super()` เพื่อส่งค่าที่จำเป็นไปยังคลาสแม่


## 4. การใช้งาน Try-Catch ใน Controller
การใช้ `try-catch` เพื่อดักจับข้อผิดพลาดที่อาจเกิดขึ้นระหว่างการประมวลผลใน `try` หากมีข้อผิดพลาดเกิดขึ้น จะเข้าสู่ส่วน `catch` และทำงานตามที่กำหนดไว้ใน `catch`

### ตัวอย่างการใช้งาน Try-Catch:
```js
const express = require('express');
const app = express();

app.get('/error', (req, res) => {
    try {
        // จำลองการเกิดข้อผิดพลาด
        throw new Error('Something went wrong!');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
