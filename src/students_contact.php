<?php
/**
 * Plugin Name: Add Admission Record Mutation
 * Author: Peet
 * Description: Insert admission records into admission_database Table 
 */

if (!defined('ABSPATH')) {
    // Prevent direct access to this file
    wp_safe_redirect(home_url(), 301);
    exit;
}

add_action('graphql_init', function () {
    register_graphql_mutation('addstudentcontactmutation', [
        'inputFields' => [
            'name' => [
                'type' => 'String',
                'description' => __('name of the applicant', 'your-textdomain'),
            ],
           
            'email' => [
                'type' => 'String',
                'description' => __('email of the applicant', 'your-textdomain'),
            ],
            'contact' => [
              'type' => 'String',
              'description' => __('contact of the applicant', 'your-textdomain'),
          ],
          
          
        
           
        ],

        'outputFields' => [
            'testoutput' => [
                'type' => 'String',
                'description' => __('Description of the output field', 'your-textdomain'),
                'resolve' => function ($payload, $args, $context, $info) {
                    return isset($payload['testoutput']) ? $payload['testoutput'] : null;
                }
            ]
        ],

        'mutateAndGetPayload' => function ($input, $context, $info) {
            // Database connection parameters
            $servername = "localhost";
            $username = "root"; // Your MySQL username
            $password = ""; // Your MySQL password
            $dbname = "mydatabase"; // Your MySQL database name
            
            try {
                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    throw new Exception("Connection failed: " . $conn->connect_error);
                }

                // Extract form data
                $name = $input['name'];
                $email = $input['email'];
                $contact = $input['contact'];
               

                // Prepare SQL statement with parameterized query to prevent SQL injection
                $sql = "INSERT INTO students_contact (name, email , contact) 
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

                // Prepare and bind parameters
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssssssss", $name, $email, $contact);

                // Execute SQL statement
                if ($stmt->execute()) {
                    $testoutput = "New record created successfully";
                } else {
                    throw new Exception("Error: " . $sql . "<br>" . $conn->error);
                }

                // Close statement and connection
                $stmt->close();
                $conn->close();

                return [
                    'testoutput' => $testoutput,
                ];
            } catch (Exception $e) {
                return [
                    'testoutput' => 'Error: ' . $e->getMessage(),
                ];
            }
        }
    ]);
});
