public class Main {
    public static String compressString(String input) {
        if (input == null || input.isEmpty()) {
            return "";
        }

        StringBuilder compressed = new StringBuilder();
        int count = 1;
        char currentChar = input.charAt(0);

        for (int i = 1; i < input.length(); i++) {
            if (input.charAt(i) == currentChar) {
                count++; 
            } else {
                compressed.append(currentChar).append(count);

                currentChar = input.charAt(i);
                count = 1;
            }
        }

        compressed.append(currentChar).append(count);

        return compressed.toString();
    }

    public static void main(String[] args) {
        String input = "abbbbeeeeffggg";
        String result = compressString(input);
        System.out.println("Compressed string: " + result);
    }
}