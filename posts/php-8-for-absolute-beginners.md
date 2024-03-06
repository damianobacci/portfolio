---
title: 'Exercises from the book "PHP 8 for Absolute Beginners"'
date: "2024-03-05"
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

?>
```

Create a PHP program which displays HTML code within the echo instruction.

```php
<?php

echo "<h1>This is a simple HTML page</h1>";
echo "<p>The page has a title and a paragraph.</p>";

?>
```

**Chapter 2: Understanding PHP, Language Basics**

Complete the personal portfolio site from this chapter.

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

?>
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

?>

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

?>

```
