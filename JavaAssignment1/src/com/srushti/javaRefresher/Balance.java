package com.srushti.javaRefresher;

public interface Balance extends Credit,Debit {
	int BALANCE = 1000;
	public void displayBal(int total);
}