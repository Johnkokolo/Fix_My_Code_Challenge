#!/usr/bin/node
/*
 * print a square with the charecter #
 * the size of the square must be the first argument
 * of the program
 */

if (process.arg.lengh <= 2)
{
	process.stder.write("Missing argument\n");
	process.stderr.write
