const usersController = require("../controller/users.controller");
var express = require("express");
var router = express.Router();

//user Registration
router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: User Registration
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *                 
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                     
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                 
 *                     
 *      responses:
 *          '200':
 *              description: Registered successfully
 *          '400':
 *              description: Enter the correct details
 *          
 */

//User Login
router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User login
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *                
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                 
 *      responses:
 *          '200':
 *              description: Login successfully
 *          '400':
 *              description: Inva
 *         
 */


//Adding Query
router.post("/addquery", usersController.addquery);

/**

 * @swagger

 * /query/addquery:

 *   post:

 *      description: adding query

 *      tags:

 *          - query

 *      parameters:

 *          - in: body

 *            name: query

 *            description: query data

 *            schema:

 *              type: object

 *              required:

 *                 - queryName

 *                 - queryStartDate

 *                 - queryEndDate

 *            properties:

 *                  queryName:

 *                      type: string

 *                      minLength: 1

 *                      maxLength: 45

 *                  queryStartDate:

 *                      type: integer

 *                  queryEndDate:

 *                      type:integer

 *                    

 *      responses:

 *          '200':

 *              description: Query Added Successfully

 *          '400':

 *              description: Error

 *          

 */
//Adding Options

router.post("/addoptions", usersController.addoptions);


/**
 * @swagger
 * /options/addoptions:
 *   post:
 *      description: Options Data
 *      tags:
 *          - options
 *      parameters:
 *          - in: body
 *            name: options
 *            description: Options data
 *            schema:
 *              type: array
 *              required:
 *                 - optionId
 *                 - queryId
 *                 - options
 *                
 *                
 *                 
 *              properties:
 *                  optionId:
 *                      type: integer
 * 
 *                  queryId:
 *                      type: integer
 *                      
 *                      
 *                  options:
 *                      type: string
 *                      
 *                     
 *      responses:
 *          '200':
 *              description: Options Added successfully
 *          '400':
 *              description: Error
 *          
 */

 //voting



 router.post("/castvote", usersController.castvote);

 /**

  * @swagger

  * /vote/castvote:

  *   post:

  *      description: casting vote

  *      tags:

  *          - vote

  *      parameters:

  *          - in: body

  *            name: vote

  *            description: voting data

  *            schema:

  *              type: object

  *              required:

  *                 - voteId

  *                 - queryId

  *                 - optionId

  *                 - userId

  *                
  *              properties:

  *                  voteId:

  *                      type: integer

  *                  queryId:

  *                      type: integer

  *                  optionId:

  *                      type:integer

  *                  userId:

  *                      type:integer

  *                  

  *      responses:

  *          '200':

  *              description: vote casted successfully

  *          '400':

  *              description: error

  *          

  */


  router.get("/getAllUsers", usersController.getAllUsers);

  /**
 
   * @swagger
 
   * /details/getAllUsers:
 
   *   get:
 
   *      description: Get User Details
 
   *      tags:
 
   *          - details
 
   *          
 
   *      responses:
 
   *          '200':
 
   *              description: successfull
 
   *          '400':
 
   *              description: error
 
   *          
 
   */



   router.get("/getAlloptions", usersController.getAlloptions);

  /**
 
   * @swagger
 
   * /details/getAlloptions:
 
   *   get:
 
   *      description: Get Options Details
 
   *      tags:
 
   *          - details
 
   *          
 
   *      responses:
 
   *          '200':
 
   *              description: successfull
 
   *          '400':
 
   *              description: error
 
   *          
 
   */


  // get  All query
   router.get("/getAllquery", usersController.getAllquery);

   /**
  
    * @swagger
  
    * /details/getAllquery:
  
    *   get:
  
    *      description: Get Query Details
  
    *      tags:
  
    *          - details
  
    *          
  
    *      responses:
  
    *          '200':
  
    *              description: successfull
  
    *          '400':
  
    *              description: error
  
    *          
  
    */


    // get Id list(queryId and optionId)
    router.get("/getIdlist", usersController.getIdlist);

    /**
   
     * @swagger
   
     * /details/getIdlist:
   
     *   get:
   
     *      description: Get Id Details
   
     *      tags:
   
     *          - details
   
     *          
   
     *      responses:
   
     *          '200':
   
     *              description: successfull
   
     *          '400':
   
     *              description: error
   
     *          
   
     */
 
  
   router.get("/gettotalvotes", usersController.gettotalvotes);

   /**
  
    * @swagger
  
    * /vote/gettotalvotes:
  
    *   get:
  
    *      description: get votes
  
    *      tags:
  
    *          -  total vote
  
    *          
  
    *      responses:
  
    *          '200':
  
    *              description: successfull
  
    *          '400':
  
    *              description: error
  
    *          
  
    */
 

 


  

   
 
module.exports = router;
