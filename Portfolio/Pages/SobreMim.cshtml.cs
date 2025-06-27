using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Portfolio.Pages
{
    public class SobreMimModel : PageModel
    {
        private readonly ILogger<SobreMimModel> _logger;

        public SobreMimModel(ILogger<SobreMimModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }

}
