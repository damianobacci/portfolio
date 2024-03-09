---
title: 'Exercises from the book "PHP 8 for Absolute Beginners"'
date: "2024-03-09"
---

![PHP 8 for Absolute Beginners](php.jpg)

As I delve deeper into PHP and focus on building a solid foundation, this post will feature exercises from the book [PHP 8 for Absolute Beginners](https://amzn.to/3OQRJh4), and whenever possible, additional details and personal comments.

The complete code is also available on [GitHub](https://github.com/damianobacci/php-8-for-absolute-beginners).

**Chapter 1: Getting Ready to Program**

Create a simple PHP program which displays your name, address, and paragraph of information about you using the _echo_ instruction.

```php

<?php

echo "Damiano Bacci";
echo "05035 Narni, Terni, Italy";
echo "I am junior web developer looking forward to learn PHP.";

```

Create a PHP program which displays HTML code within the echo instruction.

```php

<?php

echo "<h1>This is a simple HTML page</h1>";
echo "<p>The page has a title and a paragraph.</p>";

```

**Chapter 2: Understanding PHP, Language Basics**

Complete the personal portfolio site from this chapter (the views and the navbar are not included).

```php
//index.php
<?php

(string) $nav = "";
(string) $info = "";

include_once "views/navigation.php";
include_once "classes/Page_Data.class.php";

$pageData = new Page_Data();
$pageData->title = "Simple dynamic webpage in PHP";
$pageData->css = "<link rel='stylesheet' href='css/layout.css'/>";
$pageData->content = $nav;
$navigationIsClicked = isset($_GET['page']);

if ($navigationIsClicked) {
    $fileToLoad = $_GET['page'];
} else {
    $fileToLoad = "home";
}

include_once "views/$fileToLoad.php";

$pageData->content .= $info;
$pageData->embeddedStyle = $style;

require 'templates/page.php'; //single comment

echo $page;

```

```php
//classes/Page_Data.class.php
<?php

class Page_Data {
    public string $title = "";
    public string $content = "";
    public string $css = "";
    public string $embeddedStyle = "";
}

```

```php
//templates/page.php
<?php

$page = "
<!DOCTYPE html>
<html>
<head>
<title>{$pageData->title}</title>
<meta/>
{$pageData->css}
{$pageData->embeddedStyle}
</head>
<body>
{$pageData->content}
</body>
</html>
";

```

**Chapter 3: Form Management**

A class with getters and setters.

```php

<?php
class Page_Data {
    private string $title = "";
    private string $content = "";
    public string $css = "";
    public string $embeddedStyle = "";
    function __construct() {
        $this->title = "Title goes here";
        $this->content = "Page contente goes here";
        $this->css = "CSS goes here";
        $this->embeddedStyle = "Embedded CSS goes here";
        }

        public function getTitle(): string {
            return $this->title;
        }
        public function setTitle(string $value) {
            if (strpos($value,"^")) {
                $this->title = $value;
        }
    }
        public function getContent(): string {
            return $this->content;
        }
        public function setContent(string $value) {
            if (strpos($value,"<")) {
                $this->content = $value;
        }
    }
        public function appendContent(string $value) {
            if (strpos($value,"<")) {
                $this->content .= $value;
        }
        }
}

```

A form to calculate a person's body mass index (BMI), based on the person's height and weight.

```php

<?php
$style = "
<style>
nav a:nth-child(5) {
    text-decoration: underline;
}
.label {
    display: block;
}
</style>";

$quizIsSubmitted = isset($_POST["bmi-submitted"]);
if ($quizIsSubmitted) {
    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $bmi = $weight / (2 * ($height/100));
    $info = showQuizResponse($bmi);
} else {
    $info = "
<form method='post' action='index.php?page=bmi'>
<p>Calculate your BMI with this tool.</p>
<label class='label 'for='weight'>Weight in KG</label><input type='number' name='weight' id='weight'/>
<label class='label for='height'>Height in CM</label><input type='number' name='height' id='height'/>
<input type='submit' name='bmi-submitted' value='Calculate BMI'/>
</form>";
}

function showQuizResponse( string $bmi) {
    $formattedBMI = number_format($bmi,2);
    $response = "<p>Your BMI is $formattedBMI</p><p>More precisely, it's $bmi</p>";
    $response .= "<p><a href='index.php?page=bmi'>Calculate again?</a></p>";
    return $response;
}

```

A currency converter paired with an exchange rate API (this example uses just three currencies).

```php

<?php
$style = "
<style>
nav a:nth-child(6) {
    text-decoration: underline;
}
.label {
    display: block;
}
</style>";

$formIsSubmitted = isset($_POST["currency-submitted"]);
if ($formIsSubmitted) {
    $currency = $_POST["currency"];
    $converted = $_POST["converted"];
    $amount = $_POST["amount"];
    $info = "<p>You asked to convert $amount $currency into $converted.</p><p>The result is:</p>";
    $info .= convert($currency, $converted, $amount);
    $info .= "<p><a href='index.php?page=currency'>Convert a different amount?</a></p>";
} else {
    $info = "
<form method='post' action='index.php?page=currency'>
<p>This currency converter makes API calls to <a href='https://www.exchangerate-api.com/'>ExchangeRate</a> to find conversion rates.</p>
<p>Convert between selected currencies:</p>
<label class='label for='amount'>Amount</label><input type='number' name='amount' min='1' max='1000000000'/>
<label class='label 'for='currency'>From:</label>
<select name='currency'>
<option value='EUR'>EUR</option>
<option value='USD'>USD</option>
<option value='CHF'>CHF</option>
</select>
<label class='label 'for='converted'>To:</label>
<select name='converted'>
<option value='EUR'>EUR</option>
<option value='USD'>USD</option>
<option value='CHF'>CHF</option>
</select>
<input type='submit' name='currency-submitted' value='Convert'/>
</form>";
}

function convert( string $currency, string $converted, string $amount ) {
    $response = file_get_contents("https://v6.exchangerate-api.com/v6/API_KEY/pair/$currency/$converted/$amount");
    $response =json_decode($response);
    $conversion_result = $response->conversion_result;
    return $conversion_result;
}

```
