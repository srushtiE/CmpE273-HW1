package com.srushti.javaRefresher;


public class Stacks {
    
    private static MyStacks[] tower;
    
    public static void towerOfHanoi (int num){
    	tower = new MyStacks[4];
    	for(int i=0; i<=3; i++){
    		tower[i] = new MyStacks(4);
    	}
    	for(int j=num; j>0; j--){
    		tower[1].push(new Integer(j));
    	}
    	showStages(num, 1, 2, 3);
    }
    
    public static void showStages(int x, int a, int b, int c){
    	
    	if (x>0){
    		try{
    			showStages(x-1, a, c, b);
    			Integer num = (Integer) tower[a].pop();
    			tower[b].push(num);
    			System.out.println("Moving disk " + num + " from tower "+ a + " to top of tower " + b);
                showStages(x - 1, c, b, a);
    		}catch(Exception e){}
    	}
    }
 
    public static void main(String[] args) {
        System.out.println("Example of Tower of Hanoi through Stacks for 3 disks");
        towerOfHanoi(3);
    }
}