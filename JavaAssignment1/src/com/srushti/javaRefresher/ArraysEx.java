package com.srushti.javaRefresher;

import java.util.Scanner;

public class ArraysEx {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] arr = new int[10];
		System.out.println("Please enter the elements : ");
		for(int i=0;i<10;i++){
			arr[i]= scanner.nextInt();
		}
		arrayReversal(arr);
		System.out.println("Elements in reverse are : ");
		for(int i=0;i<10;i++){
			System.out.print(arr[i]);
			if(i<9){
				System.out.print(",");
			}
		}
		scanner.close();
	}

	
public static void arrayReversal(int[] a){
	   reverse(a, 0, a.length -1);
	}

	static void reverse(int[] a, int i, int j){
	    if(i<j){
	       int tmp = a[i];
	       a[i] = a[j];
	       a[j] = tmp;
	       reverse(a, ++i, --j);
	    }   
	}
}