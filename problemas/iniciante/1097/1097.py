def main():
    i = 1
    j1 = 7
    j2 = 6
    j3 = 5
    for a in range(5):
        print(f"I={i} J={j1}")
        print(f"I={i} J={j2}")
        print(f"I={i} J={j3}")
        i += 2
        j1 += 2
        j2 += 2
        j3 += 2

if __name__ == "__main__":
    main()
