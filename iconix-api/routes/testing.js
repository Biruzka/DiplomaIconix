// Testing the API with Curl

// # Start Web Server on port 4000 (default is 3000)
PORT=4000 nodemon
// # Create a todo using the API
curl -XPOST http://localhost:4000/projects -d 'name=Галерея&description=Салон красоты онлайн'
    curl -XPOST http://localhost:4000/prototypes -d 'id_project=58dcf9084568602131df8b66&name=Страница прототипы&code=0002'
    curl -XPOST http://localhost:4000/projects -d 'name=Team&description=веб-приложение для работы в команде'
    curl -XPOST http://localhost:4000/notes -d 'id_prototype=58e0a4f9f1af8f1be9a212be&title=все сотрудники&text=список с полями: имя, почта, должность. рядом с каждым кнопка - удалить&x=5&y=60'
    58dcf9084568602131df8b66
curl -XPOST http://localhost:4000/usecases -d 'code=001&name=регистрация...'
    // # => {"__v":0,"name":"Master Routes","completed":false,"note":"soon...","_id":"57a655997d2241695585ecf8"}%
// # Get todo by ID (use the _id from the previous request, in my case "57a655997d2241695585ecf8")
curl -XGET http://localhost:4000/usecases/58d273094997a3144c3050ee
// curl -XGET http://locurl -XGET http://localhost:4000/usecases/58d273094997a3144c3050eecalhost:4000/usecases/58d273094997a3144c3050ee
// {"_id":"57a655997d2241695585ecf8","name":"Master Routes","completed":false,"note":"soon...","__v":0}%
// # Get all elements (notice it is an array)
curl -XGET http://localhost:4000/usecases
    // [{"_id":"57a655997d2241695585ecf8","name":"Master Routes","completed":false,"note":"soon...","__v":0}]%


    // # Use the ID from the todo, in my case 57a655997d2241695585ecf8
curl -XPUT http://localhost:4000/usecases/58d273094997a3144c3050ee -d "name=авторизация"
    // # => {"_id":"57a655997d2241695585ecf8","name":"Master Routes","completed":true,"note":"hola","__v":0}%

curl -XDELETE http://localhost:4000/usecases/58d273094997a3144c3050ee 

проект
58dcf9084568602131df8b66

прототип
58e0a4f9f1af8f1be9a212be