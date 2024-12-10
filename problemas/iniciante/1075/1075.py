def main():
    a = int(input())
    for i in range(1, 10000):
        if i % a == 2:
            print(i)
            
if __name__ == "__main__":
    main()
