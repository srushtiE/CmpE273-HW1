package com.srushti.javaRefresher;

public class MyQueues {


	private int sizeOfQueue;
	private int data[];
	private int front = 0;
	private int rear = -1;
	
	public MyQueues(int[] data) {
		this.data = data;
		this.sizeOfQueue = data.length;
		this.rear = this.sizeOfQueue - 1;
	}

	public void enqueue(int entry){
		if(rear == (this.sizeOfQueue -1)){
			System.out.println("Queue Full! Addition not allowed.");
		}else{
			this.rear = rear+1;
			this.data[rear] = entry;
			System.out.println("Entry made for : " + entry );
			if (this.front == -1){
				this.front = 0;
			}
			display();
		}
	}
	
	public void dequeue(){
		if(this.front == -1){
			System.out.println("Queue Empty! Removal not allowed.");
		}else{
			System.out.println(this.data[this.front]+ " has beeen removed!");
			if(rear == this.front){
				data[this.front] = 0;
				this.front = this.front-1;
			}else{
				data[this.front] = 0;
				for(int i=this.front + 1;i<=this.rear;i++){
					this.data[i-1] = this.data[i];
				}
			}
			this.rear = this.rear-1;
		}
	}
	public void display(){
		System.out.println("Queue is :");
		try{
			for(int i= this.front;i<=this.rear;i++){
					System.out.println(this.data[i]);
			}
		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println("Queue is Empty");
		}
	}
	public static void main(String[] args) {
		int dataOfQueue[] = {10,11,12,13,14,15};
		MyQueues queues = new MyQueues(dataOfQueue);
		queues.enqueue(15);
		queues.dequeue();
		queues.enqueue(16);
		queues.dequeue();
		queues.dequeue();
		queues.dequeue();
		queues.enqueue(17);
		queues.dequeue();
		queues.dequeue();
		queues.dequeue();
		queues.dequeue();
		queues.display();
	}

}
