$(document).ready(function(){
    
        // array : if the ajax data is simply array one, then we have to do this.
        
        // var datas = [        //here datas is called staff
        //     [
        //         "Tiger Nixon",
        //         "System Architect",
        //         "Edinburgh",
        //         "5421",
        //         "2011/04/25",
        //         "$3,120"
        //     ],
        //     [
        //         "Garrett Winters",
        //         "Director",
        //         "Edinburgh",
        //         "8422",
        //         "2011/07/25",
        //         "$5,300"
        //     ]
        // ]

        // $("#user_list").DataTable({      //tableId then call the function, and if the data is in your js file, then no need to give ajax url , but if bringing from ajax server, then should have to give the path of it.
        //     data : datas             //we have to write the same data. but that staff can be changed accroding to the name of it defined above.
        // });


        // object
        // var datas = [
        //     {
        //         "id" : 1,
        //         "name" : "Aaqib",
        //         "username" : "aaqibgouher",
        //         "address" : "Bangalore"
        //     },
        //     {
        //         "id" : 2,
        //         "name" : "Saqib",
        //         "username" : "saqibgouher",
        //         "address" : "Jharkhand"
        //     },
        //     {
        //         "id" : 3,
        //         "name" : "Danish",
        //         "username" : "gouherdanish",
        //         "address" : "Bangalore"
        //     },
        //     {
        //         "id" : 4,
        //         "name" : "Nazish",
        //         "username" : "nazishfraz",
        //         "address" : "Bangalore"
        //     }
        // ]

        // $("#user_list").DataTable({
        //     data : datas,
        //     columns : [
        //         {data : "id"},
        //         {data : "name"},
        //         {data : "username"},
        //         {data : "address"}
        //     ]
        // });
    

    // using instance 
    // function myInstance(id, name, username, address){
    //     this.ids = id;
    //     this.names = name;
    //     this.usernames = username;
    //     this.addresss = address
    // }

    // $("#user_list").DataTable({
    //     data : [
    //         new myInstance(1,"Aaqib","aaqibgouher","Bangalore"),
    //         new myInstance(2,"Saqib","saqibgouher","jharkhand"),
    //         new myInstance(3,"Nazish","nazishfraz","Bangalore"),
    //         new myInstance(4,"Danish","gouherdanish","Bangalore"),
    //         new myInstance(5,"Imrana","imranafalq","Dhannbad"),
    //     ],

    //     columns : [
    //         {data : "ids"},
    //         {data : "names"},
    //         {data : "usernames"},
    //         {data : "addresss"}
    //     ]
    // });

    // from Ajax
    $("#user_list").DataTable({         //tableId and then use that function
        "ajax" : {          //Bringin the data from ajax source
            url : "https://jsonplaceholder.typicode.com/users",     //url of the data file.
            dataSrc : ""        //In this url ,there is not any staff , it is blank.
        },
        columns : [
            {data : "id"},      //selected id column
            {data : "name"},        //selected name column
            {data : "username"},        //selected username column
            {data : "address.city"},        //selected address and then city column
            {data : "company.name"}         //selected company and then its name column
        ]

    });
});