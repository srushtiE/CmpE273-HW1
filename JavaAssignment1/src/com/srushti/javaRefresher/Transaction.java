package com.srushti.javaRefresher;

public class Transaction implements Balance{
	
	int bal;
	public static void main(String[] args) {
		int amount = 100;
		int newBalance = 0;
		System.out.println("Initial Balance is : " + BALANCE);
		Transaction tr = new Transaction();
		newBalance = tr.credit(BALANCE,amount);
		amount = 200;
		newBalance = tr.debit(newBalance,amount);
		
	}

	@Override
	public int credit(int balance,int amt) {
		System.out.println("Crediting Amount : " + amt);
		bal = BALANCE + amt;
		displayBal(bal);
		return bal;
	}

	@Override
	public int debit(int balance,int amt) {
		System.out.println("Debiting Amount : " + amt);
		bal = balance - amt;
		displayBal(bal);
		return bal;
	}

	@Override
	public void displayBal(int total) {
		System.out.println("The Current Balance is : " + bal);
	}

}
