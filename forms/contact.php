<?php
$to = 'emmanuelkiptoo047@gmail.com';
$from = $_POST['email'];
$from_name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: '.$from.'\r\n';
$mailsent = mail($to, $subject, $message, $headers);
if($mailsent) {
echo 'Mail has been sent<br/><br/>';
echo '<b>To: </b>'.$to.'<br/>';
echo '<b>From: </b>'.$from.'<br/>';
echo '<b>Subject: </b>'.$subject.'<br/>';
echo '<b>Message: </b>'.$message.'<br/>';
} else {
echo 'Error in the message.';
}
?>