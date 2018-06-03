<?php
if (!empty($_POST['ajax'])) {
    $emailTo = "hoza@thebricks.sk";
    $subject = "správa z webdesign2018";

    $errorMSG = "";

    // NAME
    if (empty($_POST["name"])) {
        $errorMSG = "Nevyplnené meno";
    } else {
        $name = $_POST["name"];
    }

    // EMAIL
    if (empty($_POST["email"])) {
        $errorMSG .= "Nevyplnený email";
    } else {
        $emailFrom = $_POST["email"];
    }

    // MESSAGE
    if (empty($_POST["message"])) {
        $errorMSG .= "Nevyplnená správa";
    } else {
        $message = $_POST["message"];
    }

    // prepare email body text
    $Body = "";
    $Body .= "Meno: ";
    $Body .= $name;
    $Body .= "\n";
    $Body .= "Email: ";
    $Body .= $emailFrom;
    $Body .= "\n";
    $Body .= "\n";
    $Body .= $message;
    $Body .= "\n";

    // send email
    $success = mail($emailTo, $subject, $Body, "From:".$emailFrom);

    // redirect to success page
    if ($success && $errorMSG == ""){
        echo "Odoslané";
    } else {
        if($errorMSG == ""){
            echo "Nastala chyba pri odosielaní...";
        } else {
            echo $errorMSG;
        }
    }
    return false;
}
