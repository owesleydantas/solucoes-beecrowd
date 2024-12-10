def main():
    v = int(input()) 
    for i in range(0, 10):
        print(f"N[{i}] = {v}")
        v += v

if __name__ == "__main__":
    main()
