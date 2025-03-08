//Em test truy vấn trong phpMyadmin, ảnh kết quả và file db tên "db_task3.sql" e có để trong folder Task3
//Truy vấn 1: Lấy ra tất cả user có ít nhất 3 orders
SELECT users.id, users.name, COUNT(orders.id) 
FROM users
JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name
HAVING COUNT(orders.id) >= 3;

//Truy vấn 2: Lấy ra 5 sản phẩm có doanh thu cao nhất 
SELECT products.id, products.name, SUM(orders.amount) 
FROM orders
JOIN products ON orders.product_id = products.id
GROUP BY products.id, products.name
ORDER BY SUM(orders.amount) DESC
LIMIT 5;

//Truy vấn 3: Tính trung bình số tiền đơn hàng trong từng tháng
SELECT DATE_FORMAT(orders.order_date, '%Y-%m') AS thang, AVG(orders.amount) AS trung_binh
FROM orders
WHERE YEAR(orders.order_date) = 2025
GROUP BY thang
ORDER BY thang;

//Truy vấn 4: Tìm người đã order tất cả sản phẩm trong danh mục
SELECT users.id, users.name
FROM users
JOIN orders ON users.id = orders.user_id
JOIN products ON orders.product_id = products.id
GROUP BY users.id, users.name
HAVING COUNT(DISTINCT products.category) = (SELECT COUNT(DISTINCT category) FROM products);