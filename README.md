# Unexpected Type Error in Arithmetic Operation

This repository demonstrates a common error in JavaScript: attempting arithmetic operations on values of different types. Specifically, the provided code attempts to add a number and a string, leading to an unexpected type error.

## Bug Description
The function `myFunction` aims to add two numbers. However, it doesn't explicitly check for non-numeric inputs. When called with a number and a string, it throws a `TypeError`.

## Bug Solution
The solution involves adding type checking and appropriate handling (e.g., type conversion or alternative logic) before performing arithmetic operations.