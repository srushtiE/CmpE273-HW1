package com.srushti.javaRefresher;

public class MyStacks {
	 
    private int sizeOfStack;
    private int[] arrayOfStack;
    private int top;

    public MyStacks(int size) {
        this.sizeOfStack = size;
        this.arrayOfStack = new int[sizeOfStack];
        this.top = -1;
    }
 
    public void push(int entry){
        if(top == (sizeOfStack-1)){
            System.out.println(("Stack Full! Increasing the capacity."));
            int[] newStack = new int[this.sizeOfStack*2];
            for(int i=0;i<sizeOfStack;i++){
                newStack[i] = this.arrayOfStack[i];
            }
            this.arrayOfStack = newStack;
            this.sizeOfStack = this.sizeOfStack*2;
        }
        this.arrayOfStack[++top] = entry;
    }
 
    public int pop() throws Exception {
    	if(top == -1){
    		Exception e = new Exception("Stack Empty! Removal not allowed.");
    		throw e;
    	}
        int entry = this.arrayOfStack[top--];
        return entry;
    }
 
    public static void main(String[] args) {
        MyStacks newStack = new MyStacks(2);
        for(int i=1;i<10;i++){
        	newStack.push(i);
        }
        for(int i=1;i<4;i++){
            try {
            	newStack.pop();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}