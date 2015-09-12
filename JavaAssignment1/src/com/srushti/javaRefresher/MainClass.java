package com.srushti.javaRefresher;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class MainClass {
	public static int countOfThreads = 5;
	public static int stop = 1000000;
	
	public static void main(String args[]) {
		System.out.println("Threads Running..!");
		int increment = stop/countOfThreads;
		int startingValue = 1;
		ArrayList<Thread> threads = new ArrayList<Thread>();
		
		for(int i=1;i<=countOfThreads;i++){
			threads.add(new Thread(new EvenThread(startingValue, startingValue+increment, i+".txt")));
			startingValue+=increment;
		}
		
		for(int j=0;j<threads.size();j++){
			threads.get(j).start();
			System.out.println("Thread "+(j+1)+" started..!");
		}
		
		for(int j=0;j<threads.size();j++){
			try{
				threads.get(j).join();
				System.out.println("Thread "+(j+1)+" finished..!");
			}catch(Exception e){
				
			}
		}
		ArrayList<Integer> evens = new ArrayList<Integer>();
		for(int i=0;i<threads.size();i++){
			try{
				File f = new File((i+1) +".txt");
			Scanner scanner = new Scanner(f);
			while(scanner.hasNextInt()){
				evens.add(scanner.nextInt());
			}
			scanner.close();
			f.delete();
			}catch(Exception e){
				
			}
		}
		try{
			PrintWriter printer = new PrintWriter(new File("EvenNum.txt"));
			for(int i=0;i<evens.size();i++){
				printer.println(evens.get(i));
			}
			printer.close();
		}catch(Exception e){
			
		}
	}
}
