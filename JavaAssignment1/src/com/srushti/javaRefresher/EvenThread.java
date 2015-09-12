package com.srushti.javaRefresher;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;

public class EvenThread implements Runnable{
	int start;
	int stop;
	String file;

	@Override
	public void run() {

		ArrayList<Integer> evens = new ArrayList<Integer>();
		for(int i=start; i<=stop; i++){
			if(checkEven(i)){
				evens.add(i);
			}
		}
		try{
			PrintWriter printWriter = new PrintWriter(new File(file));
			for(int i=0; i<evens.size();i++){
				printWriter.println(evens.get(i));
			}
			printWriter.close();
		} catch(Exception e){

		}
	}

	public EvenThread(int startVal, int stopVal, String fileName){
		start = startVal;
		stop = stopVal;
		file = fileName;
	}

	public static boolean checkEven(int testValue){
		if(testValue%2 != 0){
			return false;
		}
		return true;
	}
}
