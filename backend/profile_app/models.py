from django.db import models


class Profile(models.Model):
    full_name = models.CharField(max_length=150)
    title = models.CharField(max_length=150)
    bio = models.TextField()

    photo = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    email = models.EmailField()
    phone = models.CharField(max_length=20)

    whatsapp = models.CharField(
        max_length=20,
        blank=True
    )

    location = models.CharField(
        max_length=100,
        blank=True
    )

    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True
    )

    years_of_experience = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    def __str__(self):
        return self.full_name


class Delivery(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='deliveries')
    title = models.CharField(max_length=100, verbose_name="Título da Entrega")
    description = models.TextField(verbose_name="Descrição do que entrega")
    icon = models.CharField(max_length=50, help_text="Insira um Emoji ou classe de ícone (ex: 🌐, 📱)", verbose_name="Ícone")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordem de exibição")

    class Meta:
        ordering = ['order']
        verbose_name = "O Que Eu Entrego"
        verbose_name_plural = "O Que Eu Entrego"

    def __str__(self):
        return self.title