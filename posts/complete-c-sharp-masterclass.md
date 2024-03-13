---
title: "Exercises from the course Complete C# Masterclass"
date: "2024-03-13"
---

**Section 2: DataTypes and Variables**

Parse the string variables from below into the correct datatypes:

```csharp
public static void Main(string[] args)
{
    string stringForFloat = "0.85"; // datatype should be float
    string stringForInt = "12345"; // datatype should be int
    float floatNum = float.Parse(stringForFloat);
    int intNum = Int32.Parse(stringForInt);
    Console.WriteLine("Int = {0}, Float = {1}", intNum, floatNum);
}
```
