<?php
/**
 * Plugin Name: Add Admission Record Mutation
 * Author: Peet
 * Description: Insert admission records into admission_database Table 
 */
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST"); // Allow POST requests
// header("Access-Control-Allow-Headers: Content-Type"); // Allow Content-Type header
// header("Content-Type: application/json"); // Set Content-Type header to JSON
if (!defined('ABSPATH')) {
    // Prevent direct access to this file
    wp_safe_redirect(home_url(), 301);
    exit;
}

add_action('graphql_init', function () {
    register_graphql_mutation('addadmissionmutation', [
        'inputFields' => [
            'firstName' => [
                'type' => 'String',
                'description' => __('First name of the applicant', 'your-textdomain'),
            ],
            'lastName' => [
                'type' => 'String',
                'description' => __('Last name of the applicant', 'your-textdomain'),
            ],
            'phoneNumber' => [
                'type' => 'String',
                'description' => __('Phone number of the applicant', 'your-textdomain'),
            ],
            'email' => [
                'type' => 'String',
                'description' => __('Email of the applicant', 'your-textdomain'),
            ],
            'courseInterest' => [
                'type' => 'String',
                'description' => __('Course interest of the applicant', 'your-textdomain'),
            ],
            'startDate' => [
                'type' => 'String',
                'description' => __('Start date of the course', 'your-textdomain'),
            ],
            'state' => [
                'type' => 'String',
                'description' => __('State of the applicant', 'your-textdomain'),
            ],
            'currentStatus' => [
                'type' => 'String',
                'description' => __('Current status of the admission', 'your-textdomain'),
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
                $firstName = $input['firstName'];
                $lastName = $input['lastName'];
                $phoneNumber = $input['phoneNumber'];
                $email = $input['email'];
                $courseInterest = $input['courseInterest'];
                $startDate = $input['startDate'];
                $state = $input['state'];
                $currentStatus = $input['currentStatus'];

                // Prepare SQL statement
                $sql = "INSERT INTO admission_database (firstName, lastName, phoneNumber, email, courseInterest, startDate, state, currentStatus) 
                        VALUES ('john', 'jonny', '123', 'janardhan@gmail.com', 'A', '12', 'bihar', 'C')";

                // Execute SQL statement
                if ($conn->query($sql) === TRUE) {
                    $testoutput = "New record created successfully";
                } else {
                    $testoutput = "Error: " . $sql . "<br>" . $conn->error;
                }

                // Close connection
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
?>
